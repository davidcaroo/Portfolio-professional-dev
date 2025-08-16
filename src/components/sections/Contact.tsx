import React, { useState, useEffect } from 'react';
import { useForm } from '@formspree/react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Check, AlertCircle } from 'lucide-react';
import { ContactForm } from '../../types';
import { Button } from '../common/Button';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Partial<ContactForm>>({});

  // Formspree integration
  const [state, handleSubmit] = useForm("mrbleawe"); // Tu Form ID

  // Validación personalizada
  const validateForm = (): boolean => {
    const newErrors: Partial<ContactForm> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form submit handler adaptado para validar primero y luego enviar a Formspree
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      handleSubmit(e); // Esto envía a Formspree
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactForm]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  // Limpiar campos tras envío exitoso
  useEffect(() => {
    if (state.succeeded) {
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    }
  }, [state.succeeded]);

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-light mb-6">
              Trabajemos <span className="text-accent">juntos</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él y ayudarte a hacerlo realidad
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Información de contacto */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-primary dark:text-light mb-6">
                  Información de contacto
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Estoy disponible para proyectos freelance, oportunidades laborales
                  y colaboraciones. No dudes en contactarme a través de cualquiera
                  de estos medios.
                </p>
              </div>
              <div className="space-y-6">
                <a
                  href="mailto:dacamo0502@gmail.com"
                  className="flex items-center space-x-4 p-4 bg-light dark:bg-dark rounded-lg hover:bg-accent/10 transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:text-dark transition-colors duration-300">
                    <Mail className="h-6 w-6 text-accent group-hover:text-dark" />
                  </div>
                  <div>
                    <div className="text-primary dark:text-light font-medium">Email</div>
                    <div className="text-gray-600 dark:text-gray-300">dacamo0502@gmail.com</div>
                  </div>
                </a>
                <a
                  href="https://wa.me/573232231834"
                  className="flex items-center space-x-4 p-4 bg-light dark:bg-dark rounded-lg hover:bg-accent/10 transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:text-dark transition-colors duration-300">
                    <Phone className="h-6 w-6 text-accent group-hover:text-dark" />
                  </div>
                  <div>
                    <div className="text-primary dark:text-light font-medium">Teléfono</div>
                    <div className="text-gray-600 dark:text-gray-300">+57 (311) 606-1807</div>
                  </div>

                </a>
                <div className="flex items-center space-x-4 p-4 bg-light dark:bg-dark rounded-lg">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-primary dark:text-light font-medium">Ubicación</div>
                    <div className="text-gray-600 dark:text-gray-300">Cartagena de Indias, Colombia</div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary dark:text-light mb-4">
                  También me puedes encontrar en:
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/davidcaroo"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visitar perfil de GitHub de David Caro"
                    className="w-12 h-12 bg-light dark:bg-dark rounded-lg flex items-center justify-center hover:bg-accent hover:text-dark transition-colors duration-300"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ingdavid-caro/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visitar perfil de LinkedIn de David Caro"
                    className="w-12 h-12 bg-light dark:bg-dark rounded-lg flex items-center justify-center hover:bg-accent hover:text-dark transition-colors duration-300"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Formulario de contacto */}
            <div className="bg-light dark:bg-dark rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-primary dark:text-light mb-6">
                Envíame un mensaje
              </h3>

              {state.succeeded && (
                <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-lg flex items-center space-x-2">
                  <Check className="h-5 w-5" />
                  <span>¡Mensaje enviado exitosamente! Te contactaré pronto.</span>
                </div>
              )}

              {state.errors && state.errors.length > 0 && (
                <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-lg flex items-center space-x-2">
                  <AlertCircle className="h-5 w-5" />
                  <span>Error al enviar el mensaje. Por favor, intenta de nuevo.</span>
                </div>
              )}

              <form onSubmit={onSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-primary dark:text-light font-medium mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-colors duration-300 ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                    placeholder="Tu nombre completo"
                  />
                  {errors.name && (
                    <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-primary dark:text-light font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-colors duration-300 ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                    placeholder="tu@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-primary dark:text-light font-medium mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-colors duration-300 resize-none ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                    placeholder="Cuéntame sobre tu proyecto o consulta..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-red-500 text-sm">{errors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={state.submitting}
                  icon={Send}
                  className="w-full"
                >
                  {state.submitting ? 'Enviando...' : 'Enviar mensaje'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
