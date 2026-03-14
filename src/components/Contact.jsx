import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";
import sendRequest from "../services/sendRequest";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Nome deve ter pelo menos 2 caracteres";
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "E-mail inválido";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Mensagem é obrigatória";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Mensagem deve ter pelo menos 10 caracteres";
    }

    setErrors(newErrors);
    return !newErrors.name && !newErrors.email && !newErrors.message;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.warning("Por favor, corrija os erros no formulário.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      try {
        sendRequest(formData);

        toast.success("Mensagem enviada! Obrigado pelo contato.");

        setFormData({ name: "", email: "", message: "" });
      } catch (error) {
        toast.error("Ocorreu um erro. Tente novamente mais tarde.", error);
      } finally {
        setIsSubmitting(false);
      }
    }, 2000);
  };

  return (
    <section id="contact" className="scroll-mt-nav py-8">
      <div className="container mx-auto p-4">
        <div className="text-center mb-20">
          <h1 className="mb-4 text-3xl md:text-5xl font-light tracking-tight">
            Entre em <span className="font-medium text-white">Contato</span>
          </h1>
          <p className="text-sm text-gray-500 max-w-xl mx-auto font-light">
            Tem um projeto em mente ou quer conversar sobre oportunidades? Envie uma mensagem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in flex flex-col justify-center">
            <div>
              <h3 className="text-3xl font-light tracking-tight mb-4">Vamos conversar</h3>
              <p className="text-gray-400 font-light leading-relaxed max-w-md">
                Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades para fazer parte da sua equipe.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-cyan-500 mb-2">E-mail</h4>
                <a
                  href="mailto:mateus09muniz@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  mateus09muniz@gmail.com
                </a>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest text-cyan-500 mb-2">WhatsApp</h4>
                <a
                  href="https://wa.me/5588981252883?text=Ol%C3%A1%2C%20Mateus%21%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +55 (88) 98125-2883
                </a>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest text-cyan-500 mb-2">Localização</h4>
                <p className="text-gray-300">Ceará, Brasil</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-transparent p-0 lg:p-8">
            <form onSubmit={handleSubmit} className="space-y-8" noValidate>
              <div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b border-gray-800 transition-all duration-300 focus:border-cyan-500 outline-none placeholder:text-gray-600 py-3 text-white font-light ${
                    errors.name ? "border-red-500" : ""
                  }`}
                  required
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-red-500 text-xs mt-2 font-light">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Seu e-mail"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b border-gray-800 transition-all duration-300 focus:border-cyan-500 outline-none placeholder:text-gray-600 py-3 text-white font-light ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  required
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-red-500 text-xs mt-2 font-light">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Sua mensagem..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b border-gray-800 min-h-[100px] resize-none overflow-hidden transition-all duration-300 focus:border-cyan-500 outline-none placeholder:text-gray-600 py-3 text-white font-light ${
                    errors.message ? "border-red-500" : ""
                  }`}
                  required
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                />
                {errors.message && (
                  <p id="message-error" className="text-red-500 text-xs mt-2 font-light">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex items-center justify-center gap-3 bg-white hover:bg-gray-100 disabled:bg-gray-400 text-black px-8 py-3 rounded-full text-sm font-medium transition-all w-full md:w-auto"
                >
                  {isSubmitting ? (
                    <div className="flex justify-center items-center space-x-3">
                      <div className="w-4 h-4 border-b-2 border-black animate-spin rounded-full"></div>{" "}
                      <span>Enviando...</span>
                    </div>
                  ) : (
                    <>
                      <span>Enviar Mensagem</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
