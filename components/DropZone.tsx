"use client";
import { db, storage } from "@/Firebase";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import DropzoneComponent from "react-dropzone";

const DropZone = () => {
  const maxsize = 20000000;
  const [loading, setLoading] = useState(false);
  const { isLoaded, user } = useUser();
  const onDrop = (acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onabort = () => console.log("File Reading was Aborted");
      reader.onerror = () => console.log("File reading has failed");
      reader.onload = async () => {
        await uploadPost(file);
      };
      reader.readAsArrayBuffer(file);
    });
    const uploadPost = async (selectedFile: File) => {
      if (loading) return;
      if (!user) return;

      setLoading(true);
      const docRef = await addDoc(collection(db, "users", user.id, "files"), {
        userId: user.id,
        fileName: selectedFile.name,
        fullName: user.fullName,
        profileImg: user.imageUrl,
        timeStamp: serverTimestamp(),
        type: selectedFile.type,
        size: selectedFile.size,
      });
      const imageRef = ref(storage, `users/${user.id}/files/${docRef.id}`);
      uploadBytes(imageRef, selectedFile).then(async (snapShot) => {
        const downloadUrl = await getDownloadURL(imageRef);

        await updateDoc(doc(db, "users", user.id, "files", docRef.id), {
          downloadUrl: downloadUrl,
        });
      });

      setLoading(false);
    };
  };
  return (
    <div>
      <DropzoneComponent minSize={0} maxSize={maxsize} onDrop={onDrop}>
        {({
          getRootProps,
          getInputProps,
          isDragActive,
          isDragReject,
          fileRejections,
        }) => {
          const isFileTooLarge =
            fileRejections.length > 0 && fileRejections[0].file.size > maxsize;

          return (
            <section className="m-4">
              <div
                {...getRootProps()}
                className={cn(
                  "w-full h-52 flex justify-center items-center p-5 border border-dashed rounded-lg",
                  isDragActive
                    ? "bg-blue-950"
                    : "bg-slate dark:bg-slate-500 text-slate-300"
                )}
              >
                <input {...getInputProps()} />
                {!isDragActive && "Click here or drag files to drop"}
                {isDragActive && !isDragReject && "Drop to upload this file"}
                {isDragReject && "File type not accepted !!"}
                {isFileTooLarge && <div> File is Too Lagre</div>}
              </div>
            </section>
          );
        }}
      </DropzoneComponent>
    </div>
  );
};

export default DropZone;
