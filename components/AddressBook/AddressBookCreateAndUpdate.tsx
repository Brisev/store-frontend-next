// import { TextInput } from "../Inputs/TextInput";

import { Stack } from "@mui/system";
import { ShopagoSelect, StyledOption } from "../Inputs/Select";
import TextInput from "../Inputs/TextInput";

const AddressBookCreateAndUpdate = () => {
  return (
    <>
      <Stack>
        <TextInput placeholder="First Name" />
        <TextInput placeholder="Last Name" />
        <TextInput placeholder="Address" />
        <TextInput placeholder="Additional Information" />
        <ShopagoSelect>
          <StyledOption value={10}>Documentation</StyledOption>
        </ShopagoSelect>
        {/* <TextInput placeholder="State" /> */}
        <TextInput placeholder="City" />
        <TextInput placeholder="Phone Number" />
      </Stack>
    </>
  );
};

export default AddressBookCreateAndUpdate;
