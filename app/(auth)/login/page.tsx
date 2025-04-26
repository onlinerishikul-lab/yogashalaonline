"use client";

import Link from "next/link";
import { useState, useTransition } from "react";
import { Eye, EyeOff } from "lucide-react";
import { IMAGES } from "@/config/constants";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormData } from "@/zod-schema/auth";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [loading, setLoading] = useTransition();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const router = useRouter();

  const onSubmit = async (data: LoginFormData) => {
    setLoading(async () => {
      setServerError(null);
      await authClient.signIn.email(
        {
          email: data.email,
          password: data.password,
        },
        {
          onRequest: () => {
            //show loading
          },
          onSuccess: () => {
            //redirect to dashboard
            router.back();
          },
          onError: (ctx) => {
            setServerError(ctx.error.message);
          },
        }
      );
    });
  };

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="relative hidden lg:block">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${IMAGES.LOGIN_BACKGROUND})`,
            filter: "sepia(0.2) brightness(0.9)",
          }}
        />
      </div>
      <div className="flex items-center justify-center p-8">
        <div className="mx-auto w-full max-w-md space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight">Log in</h1>
            <p className="text-gray-500">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-[#4377B2] hover:underline">
                Sign up
              </Link>
            </p>
          </div>

          {serverError && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <span className="block sm:inline">{serverError}</span>
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2">
              <Label htmlFor="email">User name or email address</Label>
              <Input id="email" type="email" {...register("email")} />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Your password</Label>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="h-auto p-0 text-[#4377B2] hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}{" "}
                  Hide
                </Button>
              </div>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                {...register("password")}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
              <div className="flex justify-end">
                <Link
                  href="#"
                  className="text-sm text-[#4377B2] hover:underline"
                >
                  Forget your password
                </Link>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#4377B2] hover:bg-[#d54e36]"
            >
              {loading ? "Loading..." : "Sign in"}
            </Button>

            <div className="text-center text-sm text-gray-500">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-[#4377B2] hover:underline">
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
