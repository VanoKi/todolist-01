// @flow
import {Button} from "./Button.tsx";

type Props = {
  onClick?: () => void
};
export const Input = (props: Props) => {
  return (
    <div>
      <input/>
      <Button
        title={'+'}
        // onClick={}
      />
    </div>
  );
};