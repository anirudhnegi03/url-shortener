import { Box, Heading, Text, TextField, Button } from "@radix-ui/themes";
import { useRegister } from "../hooks/register-hook";

const Register = () => {
  const { doSubmit, register, handleSubmit, errors } = useRegister();
  return (
    <Box width="360px" mx="auto" mt="6">
      <Heading align="center" mb="4">
        Register
      </Heading>

      <form onSubmit={handleSubmit(doSubmit)}>
        <Box mb="3">
          <Text as="label" size="2" weight="medium" mb="1" display="block">
            Name
          </Text>
          <TextField.Root {...register("name")} placeholder="Enter name" />
          {errors.name && <Text color="red">{errors.name.message}</Text>}
        </Box>

        <Box mb="3">
          <Text as="label" size="2" weight="medium" mb="1" display="block">
            Email
          </Text>
          <TextField.Root
            {...register("email")}
            type="email"
            placeholder="Enter email"
          />
          {errors.email && <Text color="red">{errors.email.message}</Text>}
        </Box>

        <Box mb="4">
          <Text as="label" size="2" weight="medium" mb="1" display="block">
            Password
          </Text>
          <TextField.Root
            {...register("password")}
            type="password"
            placeholder="Enter password"
          />
          {errors.password && (
            <Text color="red">{errors.password.message}</Text>
          )}
        </Box>

        <Button size="3" style={{ width: "47%", margin: 4 }}>
          Register
        </Button>
        <Button variant="soft" size="3" style={{ width: "47%", margin: 4 }}>
          Reset
        </Button>
      </form>
    </Box>
  );
};

export default Register;
