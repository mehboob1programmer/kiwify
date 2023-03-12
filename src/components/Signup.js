import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Signup() {

    const formik = useFormik({
      initialValues: {
        email: '',
        repeatEmail: '',
        password: '',
      },
      validationSchema: Yup.object({
        email: Yup.string()
          .email('O e-mail deve ser válido')
          .required('Esse campo é obrigatório'),
        repeatEmail: Yup.string()
          .oneOf([Yup.ref('email'), null], 'Os dois e-mails devem ser iguais. Esse campo é obrigatório')
          .required('Esse campo é obrigatório'),
        password: Yup.string()
          .min(8, 'A senha deve conter pelo menos 8 caracteres')
          .required('Esse campo é obrigatório'),
        termsAndConditions: Yup.boolean()
          .oneOf([true], '(Esse campo é obrigatório)')
          .required('Esse campo é obrigatório'),
      }),
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      },
    });

    return (
      <div>
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">Criar nova conta</h2>
        <p className="mt-2 text-center text-base leading-5 text-gray-600">
            Ou 
            <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150 ml-1.5">
            entrar na sua conta existente
            </Link>
        </p>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <form className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10" onSubmit={formik.handleSubmit}>
            <div>
              <label className="block text-sm font-medium leading-5 mb-1 text-gray-700">E-mail</label>
              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}        
                  autoComplete="off"
                  className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`}
                />
              </div>
              {formik.touched.email && formik.errors.email ? (
                <div className="text-xs text-red-500 mt-1">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="mt-6">
              <label className="block text-sm font-medium leading-5 mb-1 text-gray-700">Repetir e-mail</label>
              <div>
                <input
                  id="repeatEmail"
                  name="repeatEmail"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.repeatEmail}
                  autoComplete="off"
                  className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full ${formik.touched.repeatEmail && formik.errors.repeatEmail ? 'border-red-500' : ''}`}
                />
              </div>
              {formik.touched.repeatEmail && formik.errors.repeatEmail ? (
                <div className="text-xs text-red-500 mt-1">{formik.errors.repeatEmail}</div>
              ) : null}
            </div>
            <div className="mt-6">
              <label className="block text-sm font-medium leading-5 text-gray-700">Senha</label>
              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  autoComplete="off"
                  className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full ${formik.touched.password && formik.errors.password ? 'border-red-500' : ''}`}
                />
              </div>
              {formik.touched.password && formik.errors.password ? (
                <div className="text-xs text-red-500 mt-1">{formik.errors.password}</div>
              ) : null}
            </div>
            <div className="mt-6">
              <label className="relative flex items-start mt-2">
                <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  id="termsAndConditions"
                  name="termsAndConditions"
                  onChange={(event) =>
                    formik.setFieldValue(
                      "termsAndConditions",
                      event.target.checked
                    )
                  }
                  value={true}
                  className={`form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer ${!formik.touched.termsAndConditions && formik.errors.termsAndConditions ? 'border-red-500' : ''}`}
                />
                </div>
                <div className="ml-2 text-sm leading-5">
                  <span className="font-medium text-gray-700">
                    Eu li e aceito os
                    <a href="https://kiwify.com.br/termos-de-uso" target="_blank" rel="noreferrer" className="underline ml-1">termos de uso</a>,
                    <a href="https://kiwify.com.br/licenca-de-uso-software" target="_blank" rel="noreferrer" className="underline mx-1">termos de licença de uso de software</a>,
                    <a href="https://kiwify.com.br/politica-de-conteudo" target="_blank" rel="noreferrer" className="underline mr-1">política de conteúdo</a>
                    da Kiwify
                  </span>
                </div>
              </label>
              {formik.errors.termsAndConditions ? (
                <div className="text-xs text-red-500 mt-1">{formik.errors.termsAndConditions}</div>
              ) : null}
            </div>
            <div className="mt-6">
              <span className="block w-full rounded-md shadow-sm">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                >
                  Criar conta
                </button>
              </span>
            </div>
          </form>
        </div>
    </div>
    );
}
  
export default Signup;
  