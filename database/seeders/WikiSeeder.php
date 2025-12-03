<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Page;
use App\Models\Revision;
use App\Models\User;

class WikiSeeder extends Seeder
{
    public function run(): void
    {
        // Create Admin User
        $admin = User::firstOrCreate(
            ['email' => 'admin@wiki.local'],
            [
                'name' => 'Admin',
                'password' => bcrypt('password'),
                'is_sysop' => true,
            ]
        );

        // Create Main Page
        $title = 'Jupach';
        $content = "Bienvenido a la Wiki de Jupach!

**Jupach** (Juventud Parroquial Chilena) es una comunidad dedicada al desarrollo integral de niños, niñas y jóvenes a través de la recreación, el servicio y la fe.

== Nuestra Misión ==
Evangelizar y educar a través de la recreación, formando cristianos comprometidos y ciudadanos honestos.

== Actividades ==
* **Encuentros Semanales**: Juegos, reflexión y compartir.
* **Campamentos**: Campamentos de verano e invierno para conectar con la naturaleza.
* **Servicio**: Ayudando a nuestras comunidades locales.

== Únete a Nosotros ==
Damos la bienvenida a todos los que quieran ser parte de esta gran familia. ¡Ven a jugar con nosotros!

== Secciones de la Wiki ==
* [[Historia]]: Los orígenes de Jupach.
* [[Metodología]]: Cómo trabajamos y jugamos.
* [[Cancionero]]: Nuestras canciones de campamento favoritas.
* [[Juegos]]: Una colección de nuestras mejores actividades.";

        $page = Page::updateOrCreate(['title' => $title]);

        // Always create a new revision for the seeder update
        $revision = Revision::create([
            'page_id' => $page->id,
            'user_id' => $admin->id,
            'content' => $content,
            'summary' => 'Actualización de contenido inicial (Español)',
            'is_minor' => false,
        ]);

        $page->update(['latest_revision_id' => $revision->id]);
    }
}
