import { memo } from "react";

function Button({ onSmash, children }) {
  return <button onClick={onSmash}>{children}</button>;
}

function AlertButton({ movieName }) {
  function handleClick() {
    alert(movieName);
  }

  return <Button onClick={handleClick}>Play this {movieName} movie.</Button>;
}

function UploadButton() {
  return <Button onClick={() => alert("uploading!")}>Upload Image</Button>;
}

const App = () => {
  return (
    <>
      <AlertButton movieName={"Tarzan"} />
      <UploadButton />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Submit Successfully!");
        }}
      >
        <input type="text" />
        <button>Submit</button>
      </form>
    </>
  );
};

export default memo(App);
