"use client";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import DropzoneComponent from "react-dropzone";

const DropZone = () => {
  const maxsize = 20000000;
  const [loading, setLoading] = useState(false);
  //   const [isLoaded, isSigned, user] = useUser();
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

      setLoading(true);

      setLoading(false);
    };
  };
  return (
    <div>
      <DropzoneComponent
        minSize={0}
        maxSize={maxsize}
        onDrop={(acceptedFiles) => console.log(acceptedFiles)}
      >
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
