/* eslint-disable no-unused-vars */
import { useIfcFile } from "../Context";

export const FileUpload = (props) => {
  const [file, setFile] = useIfcFile();

  const uploadFile = (e) => {
    const file = e.target.files[0];
    const ifcURL = URL.createObjectURL(file);
    setFile(ifcURL);
    e.target.value = null;
  };

  return (
    <div {...props}>
      <button
        className="Button violet"
        style={{
          position: "relative",
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        Upload File
        <input
          type="file"
          className="input"
          style={{
            position: "absolute",
            left: "0",
            cursor: "pointer",
            pointerEvents: "all",
          }}
          onChange={uploadFile}
        />
      </button>
    </div>
  );
};