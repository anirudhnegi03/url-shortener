import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginApiCall } from "../api/user-api";
import { loginSchema } from "../validation/login-schema";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const doSubmit = async (formData) => {
    try {
      console.log("Login Form Submit", formData);

      const res = await loginApiCall(formData);
      if (res.data.id) {
        localStorage.email = res.data.email;
        alert("Login successful");
        navigate("/dashboard");
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      console.log("Login error", err.response?.data || err.message);
    }
  };

  return { doSubmit, register, handleSubmit, errors };
};
