// @flow
import {Button} from "./Button.tsx";

type Props = {
  onClick?: () => void
};
export const Input = (props: Props) => {
  const {onClick} = props
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