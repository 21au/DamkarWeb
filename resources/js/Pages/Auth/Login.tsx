import Checkbox from '@/components/Checkbox';
import PrimaryButton from '@/components/PrimaryButton';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { Input } from '@/components/ui/input';
import { InputError } from '@/components/InputError';
import { Button } from '@/components/ui/button';

export default function Login({
  status,
  canResetPassword,
}: {
  status?: string;
  canResetPassword: boolean;
}) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route('login'), {
      onFinish: () => reset('password'),
    });
  };

  return (
    <GuestLayout>
      <Head title="Log in" />

      <img src="/images/icon/logo-login.svg" />

      {status && (
        <div className="mb-4 text-sm font-medium text-green-600">{status}</div>
      )}

      <form onSubmit={submit}>
        <p className="text-center text-3xl my-4">Silahkan Login</p>

        {/* Email */}
        <div>
          <Input
            id="email"
            type="email"
            name="email"
            value={data.email}
            className="mt-1 block w-80"
            autoComplete="username"
            autoFocus
            onChange={(e) => setData('email', e.target.value)}
            placeholder="Email"
          />
          <InputError message={errors.email} className="mt-2 text-red-600" />
        </div>

        {/* Password */}
        <div className="mt-4">
          <Input
            id="password"
            type="password"
            name="password"
            value={data.password}
            className="mt-1 block w-80"
            autoComplete="current-password"
            onChange={(e) => setData('password', e.target.value)}
            placeholder="Password"
          />
          <InputError message={errors.password} className="mt-2 text-red-600" />
        </div>

        {/* Register link */}
        <p className="text-center mt-2">
          Tidak punya akun?
          <Link href="/register" className="text-red-700 pl-2 hover:underline">
            Daftar
          </Link>
        </p>

        {/* Submit button */}
        <div className="mt-4 flex items-center justify-end">
          <Button
            className="block w-full bg-oren rounded-lg hover:bg-red-600"
            disabled={processing}
          >
            Log in
          </Button>
        </div>
      </form>
    </GuestLayout>
  );
}
