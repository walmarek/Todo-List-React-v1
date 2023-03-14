import { TextField } from "@mui/material";
import Button from "../../Button";
import useLocalStorage from "../../useStorage";
import { Field, Section } from "./styled";

export const Textarea = () => {
  const [details, setDetails, removeDetails] = useLocalStorage("");

  // work in progress...

  return (
    <>
      <Section>
        <Button onClick={removeDetails}>Clear details</Button>
      </Section>
      <Field>
        <TextField
          fullWidth
          id="outlined-multiline-static-contrlled"
          label="Details"
          multiline
          rows={2}
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        >
          {details}
        </TextField>
      </Field>
    </>
  );
};
