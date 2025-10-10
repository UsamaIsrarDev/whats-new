import { memo } from "react";

interface MyButtonProps {
  title: string;
  disabled: boolean;
}

function MyButton({ title, disabled }: MyButtonProps) {
  return <button disabled={disabled}>{title}</button>;
}

const App = () => {
  return (
    <div>
      <h2>App</h2>
      <MyButton title={"I'm a disabled button"} disabled={true} />
    </div>
  );
};

export default memo(App);
