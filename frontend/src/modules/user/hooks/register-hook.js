import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../validation/register-schema";
import { registerApiCall } from "../api/user-api";

export const useRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const doSubmit = async (formData) => {
    try {
      console.log("Register Form Submit", formData);

      const res = await registerApiCall(formData);
      console.log("API Response", res.data);
    } catch (err) {
      console.log("Register error", err.response?.data || err.message);
    }
  };

  return { doSubmit, register, handleSubmit, errors };
};
