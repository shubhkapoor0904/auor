import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Modal } from "./Modal";
import { supabase } from "../../../lib/supabase";

interface PortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PortalModal({ isOpen, onClose }: PortalModalProps) {
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm();

  const onSubmit = async (data: any) => {
    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    if (error) {
      toast.error("Invalid Credentials", {
        description: error.message || "We couldn't find an account matching that email and password.",
      });
      return;
    }

    toast.success("Welcome Back", {
      description: "Successfully authenticated to the portal.",
    });
    reset();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="max-w-md">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-light text-white mb-2 tracking-[-0.03em]">Client Portal</h2>
          <p className="text-white/60">Access your active campaigns and deliverables.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-1">
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Email Address"
              className="w-full bg-transparent border-b border-white/20 pb-3 pt-2 text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors"
            />
          </div>
          <div className="space-y-1">
            <input
              {...register("password", { required: true })}
              type="password"
              placeholder="Password"
              className="w-full bg-transparent border-b border-white/20 pb-3 pt-2 text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors"
            />
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2 cursor-pointer text-white/60 hover:text-white transition-colors">
              <input type="checkbox" className="accent-white" />
              <span>Remember me</span>
            </label>
            <button type="button" className="text-white/60 hover:text-white transition-colors">
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full border border-white text-white py-4 mt-4 font-medium hover:bg-white hover:text-black transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            ) : (
              "Sign In"
            )}
          </button>
        </form>
      </div>
    </Modal>
  );
}
