import React, { useState } from 'react';
import axios from 'axios';

interface EventImageProps {
  setImage: any;
}

export const UploadFlyer: React.FunctionComponent<EventImageProps> = ({
  setImage,
}) => {
  const [uploading, setUploading] = useState<boolean>(false);

  // const getBase64 =(img, callback)=> {
  //     const reader = new FileReader();
  //     reader.addEventListener('load', () => callback(reader.result));
  //     reader.readAsDataURL(img);
  //   }
  console.log(uploading);
  const processUpload = async (e: any) => {
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

  //    const beforeUpload = (file) =>{
  //     const isJPGorPNG = file.type === 'image/jpeg' || file.type === 'image/png'
  //     if (!isJPGorPNG) {
  //       console.error('You can only upload JPG or PNG file!');
  //     }
  //     const isLt5M = file.size / 1024 / 1024 < 5;
  //     if (!isLt5M) {
  //         console.error('Image must smaller than 5MB!');
  //     }
  //     return isJPGorPNG && isLt5M;
  //   }
  const handleChange = async (selectorFiles: FileList) => {
    console.log(selectorFiles[0]);
    await processUpload(selectorFiles[0]);
  };

  //   const handleChange = ({ onSuccess, onError, file }) => {
  //     console.log("info",file)
  //     // if (info.file.status === 'uploading') {
  //     //   this.setState({ loading: true });
  //     //   console.log("uploading")
  //     //   return;
  //     // }
  //     // if (info.file.status === 'done') {
  //       // Get this url from response in real world.
  //       processUpload(file)
  //       .then(() => {
  //         onSuccess(null, file);
  //       })
  //       .catch(() => {
  //         // call onError();
  //         onError(null, file);
  //       });

  //     // }
  //   };

  return (
    <div>
      <input type="file" onChange={(e) => handleChange(e.target.files)} />
    </div>
  );
};
