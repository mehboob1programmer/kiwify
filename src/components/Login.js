import { Link } from "react-router-dom";

import * as Yup from 'yup';
import { useFormik } from "formik";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('O e-mail deve ser válido').required('Esse campo é obrigatório'),
  password: Yup.string().min(8, 'A senha deve conter pelo menos 8 caracteres').required('Esse campo é obrigatório'),
});

function Login() {

    const formik = useFormik({
        initialValues: {
          email: "",
          password: "",
        },
        validationSchema: LoginSchema,
        onSubmit: (values) => {
          console.log(values);
        },
    });

    return (
        <div>
            <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">Entrar na sua conta</h2>
            <p className="mt-2 text-center text-base leading-5 text-gray-600">
                Ou 
                <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150 ml-1.5">
                fazer cadastro
                </Link>
            </p>
            <div className="mt-8 mx-auto sm:mx-autosm:w-full sm:max-w-md">
                <form className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10" onSubmit={formik.handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-5 mb-1 text-gray-700">E-mail</label>
                        <div>
                            <input
                                type="text"
                                autoComplete="username"
                                id="email"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full ${formik.errors.email && formik.touched.email ? 'border-red-500' : ''}`}
                            />
                        </div>
                        {formik.errors.email && formik.touched.email && (
                            <div className="text-xs text-red-500 mt-1">{formik.errors.email}</div>
                        )}
                    </div>
                    <div className="mt-6">
                        <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700">Senha</label>
                        <div>
                            <input
                                type="password"
                                autoComplete="current-password"
                                name="password"
                                id="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full ${formik.errors.password && formik.touched.password ? 'border-red-500' : ''}`}
                            />
                        </div>
                        {formik.errors.password && formik.touched.password && (
                            <div className="text-xs text-red-500 mt-1">{formik.errors.password}</div>
                        )}
                    </div>
                    <div className="mt-2 flex items-center justify-end">
                    <div className="text-sm leading-5">
                        <Link to="/reset-password" className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                            Esqueceu a senha?
                        </Link>
                    </div>
                    </div>
                    <div className="mt-6">
                        <span className="block w-full rounded-md shadow-sm">
                            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                            Entrar
                            </button>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
}
  
export default Login;
  