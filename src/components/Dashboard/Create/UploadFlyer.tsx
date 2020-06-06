import React, { useState } from 'react';
import axios from 'axios';

interface EventImageProps {
  setImage: any;
}

export const UploadFlyer: React.FunctionComponent<EventImageProps> = ({
  setImage,
}) => {
  const [uploading, setUploading] = useState<boolean>(false);
  console.log(uploading);

  const processUpload = async (e: File) => {
    setUploading(true);

    const formData = new FormData();
    formData.append('file', e);
    formData.append('upload_preset', 'wfrfnmis');

    await axios(`https://api.cloudinary.com/v1_1/dzsf703vh/image/upload`, {
      method: 'POST',
      data: formData,
    })
      .then((res) => {
        setImage(res.data.secure_url);
      })
      .catch((err) => {
        console.log(err);
        setUploading(false);
      });
  };

  const beforeUpload = (file: File) => {
    const isJPGorPNG = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJPGorPNG) {
      console.error('You can only upload JPG or PNG file!');
    }
    const isLt5M = file.size / 1024 / 1024 < 5;
    if (!isLt5M) {
      console.error('Image must smaller than 5MB!');
    }
    return isJPGorPNG && isLt5M;
  };
  const handleChange = async (selectorFiles: FileList) => {
    const file = selectorFiles[0];
    beforeUpload(file) && (await processUpload(file));
  };

  return (
    <div className="mt4 relative overflow-hidden dib">
      <div className="b--white hover-bg-white bg-black white hover-black dib  br-100 b--solid pa1 ph3 f5 fw5">
        {' '}
        <i aria-label="icon: plus" className="center">
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="plus"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"></path>
            <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"></path>
          </svg>
        </i>
        <br />
        Upload Flyer
      </div>
      <input
        type="file"
        onChange={(e) => handleChange(e.target.files)}
        style={{ left: 0, top: 0 }}
        className="absolute o-0"
      />
    </div>
  );
};
