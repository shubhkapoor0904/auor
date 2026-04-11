import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Modal } from "./Modal";
import { supabase } from "../../../lib/supabase";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface InquiryFormData {
  name: string;
  email: string;
  brand: string;
  projectDetails: string;
}

export function InquiryModal({ isOpen, onClose }: InquiryModalProps) {
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm<InquiryFormData>();

  const onSubmit = async (data: InquiryFormData) => {
    const { error } = await supabase.from("inquiries").insert({
      name: data.name,
      email: data.email,
      brand: data.brand,
      project_details: data.projectDetails,
    });

    if (error) {
      console.error(error);
      toast.error("Submission Failed", {
        description: "There was an error saving your inquiry. Please try again.",
      });
      return;
    }

    toast.success("Inquiry Submitted", {
      description: "Our team will review your project and get back to you within 24 hours.",
    });
    reset();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="max-w-2xl">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-light text-white mb-2 tracking-[-0.03em]">Start a Project</h2>
          <p className="text-white/60">Partner with our agency to elevate your brand's presence.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-1">
              <input
                {...register("name", { required: true })}
                placeholder="Full Name"
                className="w-full bg-transparent border-b border-white/20 pb-3 pt-2 text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors"
              />
            </div>
            <div className="space-y-1">
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-white/20 pb-3 pt-2 text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors"
              />
            </div>
          </div>
          <div className="space-y-1">
            <input
              {...register("brand", { required: true })}
              placeholder="Brand / Company Name"
              className="w-full bg-transparent border-b border-white/20 pb-3 pt-2 text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors"
            />
          </div>
          <div className="space-y-1">
            <textarea
              {...register("projectDetails", { required: true })}
              placeholder="Tell us about your project or goals..."
              rows={4}
              className="w-full bg-transparent border-b border-white/20 pb-3 pt-2 text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-white text-black py-4 mt-4 font-medium hover:bg-gray-200 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <span className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
            ) : (
              "Submit Inquiry"
            )}
          </button>
        </form>
      </div>
    </Modal>
  );
}
