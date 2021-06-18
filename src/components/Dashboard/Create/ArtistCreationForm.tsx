import * as React from 'react';
import { useState } from 'react';
import { LineUpProps } from '../../../@types/types';
import axios from 'axios';
import cheerio from 'cheerio';
import classNames from 'classnames';

interface TicketingProps {
  addArtist: any;
  updateArtist: any;
  removeArtist: any;
  artist: LineUpProps;
}

export const ArtistCreationForm: React.FunctionComponent<TicketingProps> = ({
  addArtist,
  updateArtist,
  artist,
  removeArtist,
}) => {
  const [igHandle, setIgHandle] = useState<string>(
    artist ? artist.igHandle : '',
  );
  const [imageURL, setImageURL] = useState<string>(
    artist ? artist.imageURL : '',
  );
  const [_id] = useState<number>(artist ? artist._id : 0);
  const [artistName, setArtistName] = useState<string>(
    artist ? artist.artistName : '',
  );
  const [artistError, setArtistError] = useState<any>({
    artistName: '',
    igPost: '',
  });
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
        setImageURL(res.data.secure_url);
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

  const updatedArtist: LineUpProps = {
    igHandle: `@${igHandle.split('@')[igHandle.split('@').length - 1]}`,
    imageURL,
    artistName,
    _id,
  };

  const fetchIgLink = async (url: string) => {
    if (
      url.substring(0, 8) === 'https://' ||
      url.substring(0, 7) === 'http://' ||
      url.substring(0, 13) === 'instagram.com' ||
      url.substring(0, 4) === 'www.'
    ) {
      const meta = url.split('/').filter((word) => word.length === 11)[0];
      if (!meta) {
        return setArtistError({
          ...artistError,
          igPost: 'Invalid URL. Please try again',
        });
      } else {
        setArtistError({
          ...artistError,
          igPost: '',
        });
        return await axios
          .get(`https://www.instagram.com/p/${meta}`)
          .then((res) => {
            console.log(res);
            let $ = cheerio.load(res.data);

            // //basic data from the meta tags
            const image_link = $('meta[property="og:image"]').attr('content');
            setImageURL(image_link);
          })
          .catch((error) =>
            setArtistError({ ...artistError, igPost: error.response.data })
          );
      }
    } else {
      setArtistError({
        ...artistError,
        igPost: 'Invalid URL. Please try again',
      });
    }
  };

  // const checkForErrors = async () => {
  //   setArtistError({
  //     ...artistError,
  //     igPost: 'Invalid URL',
  //   });
  // };
  return (
    <div className="mw6 center w-75-ns w-100">
      <div className={`mt3 mb2 tl ba-hover`}>
        <small className="db pl2 pt2 pb1 mid-gray ">
          Artist Name <span className="red">*</span>
        </small>

        <input
          value={artistName}
          onChange={async (event) => {
            setArtistName(event.currentTarget.value);
          }}
          className="pl2 pb2 bn input-reset  mr3  w-90"
        />
      </div>
      <small className="hljs-strong tl f6 db mb1 red">
        {artistError.artistName}
      </small>
      <div className={`mt3 mb2 tl ba-hover`}>
        <small className="db pl2 pt2 pb1 mid-gray ">Instagram Handle</small>

        <input
          value={igHandle}
          onChange={async (event) => {
            setIgHandle(event.currentTarget.value);
          }}
          className="pl2 pb2 bn input-reset  mr3  w-90"
        />
      </div>
      <div className="mt2 relative overflow-hidden dib">
        <div className="ba bw1 b--black dib noselect br-100 b--solid pa2 ph3 f5 fw5"
          onClick={()=>document.getElementById('artistUpload').click()}>
          Upload Image
        </div>
        <input
          type="file"
          id="artistUpload"
          onChange={(e) => handleChange(e.target.files)}
          style={{ left: 0, top: 0 }}
          className="absolute o-0"
        />
      </div>
      <small className="hljs-strong tl f6 db mb1 red">
        {artistError.igPost}
      </small>

      {!artist && (
        <div
          onClick={() => addArtist(updatedArtist)}
          className="mt4 b--black hover-bg-white hover-black dib noselect br-100 b--solid pa1 ph3 f5 fw5  "
        >
          Add
        </div>
      )}
      {artist && (
        <>
          <div
            onClick={() => updateArtist(updatedArtist)}
            className="mt4 b--black hover-bg-white hover-black dib noselect br-100 b--solid pa1 ph3 f5 fw5  "
          >
            Update
          </div>
          <div
            onClick={() => removeArtist(updatedArtist)}
            className="mt4 b--black hover-bg-white hover-black dib noselect br-100 b--solid pa1 ph3 f5 fw5  "
          >
            Remove
          </div>
        </>
      )}
    </div>
  );
};
