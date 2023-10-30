import type { ButtonProps } from "@mantine/core";
import { Button } from "@mantine/core";

export const MyButton = (props: ButtonProps) => {
  return (
    <Button color="red" {...props}>
      Yo
    </Button>
  );
};
