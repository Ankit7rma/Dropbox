"use client";
import DropzoneComponent from "react-dropzone";

const DropZone = () => {
  const maxsize = 20000000;
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
            <section>
              <div {...getRootProps()}>
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
