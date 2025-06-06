<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Youtube>
 */
class YoutubeFactory extends Factory
{
    public function definition(): array
    {
        return [
            'linkYoutube' => $this->faker->url(),
        ];
    }
}
