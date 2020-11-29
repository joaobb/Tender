import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import { ImageInputContainer } from './styles';

const ImageInput = ({ url, onFileUpload, ...props }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length) {
        const file = acceptedFiles[0];
        const fileURL = URL.createObjectURL(file);

        onFileUpload({ url: fileURL, file });
      }
    },
    [onFileUpload],
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ['image/png', 'image/jpg', 'image/jpeg'],
  });

  return (
    <ImageInputContainer isEmpty={!url}>
      <div {...getRootProps()}>
        <input
          {...props}
          {...getInputProps()}
          accept="image/jpeg, image/png, image/jpg"
        />
      </div>
    </ImageInputContainer>
  );
};
export default ImageInput;
