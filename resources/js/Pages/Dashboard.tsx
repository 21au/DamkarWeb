import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/Components/ui/card';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/Components/ui/table';
import { Button } from '@/Components/ui/button';
import MapView from '@/Components/ui/MapView';
import WeatherWidget from '@/Components/ui/WeatherWidget';

type Laporan = {
  id: number;
  jenis_kebakaran: string;
  lokasi: string;
  nama_pelapor: string;
  no_hp_pelapor: string;
  status: string;
};
interface DashboardProps {
  laporans: Laporan[];
}

export default function Dashboard({ laporans }: DashboardProps) {
  return (
    <AuthenticatedLayout
      header={
        <div className="grid sm:flex sm:text-center gap-2 justify-between">
          <h2 className="text-xl underline underline-offset-8 decoration-2 decoration-red-600 font-semibold text-white">
            Pemantauan
          </h2>
          <h2 className="rounded rounded-lg text-lg px-4 py-2 text-white bg-birutuek">
            Posko Kota Jember
          </h2>
        </div>
      }
    >
      <Head title="Pemantauan" />

      <div className="grid md:grid-cols-4">
        <div className="max-h-80 md:col-span-3 bg-oren border rounded rounded-lg border-blue-600 m-2">
          <MapView />
        </div>

        <div className="flex bg-gradient-to-b from-birudongker to-birutuek items-center justify-center max-h-80 border rounded rounded-lg border-blue-600 m-2">
          <WeatherWidget city="Jember" />
        </div>

        <div className="h-96 md:col-span-3 p-4 border rounded rounded-lg border-blue-600 m-2 bg-gradient-to-b from-birudongker to-birutuek ">
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Laporan Masuk</h3>
          </div>
          <div className="grid gap-4">
            <div className="overflow-x-auto sm:overflow-x-hidden max-h-80">
              <div className="sticky top-0 bg-white">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-16">ID</TableHead>
                      <TableHead>Lokasi</TableHead>
                      <TableHead>Nama Pelapor</TableHead>
                      <TableHead>No HP Pelapor</TableHead>
                      <TableHead>Jenis</TableHead>
                      <TableHead>Aksi</TableHead>
                    </TableRow>
                  </TableHeader>
                </Table>
              </div>
              <div className="max-h-64 overflow-y-auto">
                <Table>
                  <TableBody>
                    {laporans.map((laporan) => (
                      <TableRow key={laporan.id}>
                        <TableCell className="font-medium w-16">
                          {laporan.id}
                        </TableCell>
                        <TableCell>{laporan.lokasi}</TableCell>
                        <TableCell>{laporan.nama_pelapor}</TableCell>
                        <TableCell>{laporan.no_hp_pelapor}</TableCell>
                        <TableCell>{laporan.jenis_kebakaran}</TableCell>
                        <TableCell>Lihat detail</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2 border rounded rounded-lg border-blue-600 m-2 bg-gradient-to-b from-birudongker to-birutuek ">
          <h3 className="text-lg font-bold mb-4 text-white">Status Tim</h3>
          <div>
            <ul className="flex items-center gap-2 text-white text-xs mb-4">
              <li className="w-2 h-2 bg-green-500 rounded rounded-full"> </li>
              <span>Tersedia</span>
              <li className="w-2 h-2 bg-red-500 rounded rounded-full"> </li>
              <span>Dalam Tugas</span>
              <li className="w-2 h-2 bg-yellow-500 rounded rounded-full"> </li>
              <span>Siaga</span>
            </ul>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Tim B</CardTitle>
              <CardDescription>Jln.Merdeka No.12</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Kebakaran Gudang</p>
            </CardContent>
            <CardFooter>
              <p>08989000222</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
