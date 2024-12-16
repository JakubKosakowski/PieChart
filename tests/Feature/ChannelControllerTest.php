<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Channel;
use Inertia\Testing\AssertableInertia;

class ChannelControllerTest extends TestCase
{
    use RefreshDatabase;
    /** @test */
    public function it_displays_the_chart_page_with_channels()
    {
        $channels = Channel::factory()->count(3)->create();
        $response = $this->get(route('piechart.show'));
        $response->assertStatus(200)
            ->assertInertia(fn (AssertableInertia $page) =>
                $page->component('ShowChart')
                    ->has('data', 3)
                    ->where('data.0.id', $channels[0]->id)
                    ->where('data.1.id', $channels[1]->id)
                    ->where('data.2.id', $channels[2]->id)
            );
    }

    /** @test */
    public function it_displays_the_create_channel_page()
    {
        $response = $this->get(route('piechart.create'));
        $response->assertStatus(200)
            ->assertInertia(fn (AssertableInertia $page) =>
                $page->component('CreateChannel')
            );
    }

    /** @test */
    public function it_stores_a_new_channel_and_redirects_to_chart_page()
    {
        $data = ['name' => 'Absolutely New Channel', 'amount' => 10];
        $response = $this->post(route('piechart.store'), $data);
        $response->assertRedirect(route('piechart.show'));
        $this->assertDatabaseHas('channels', $data);
    }

    /** @test */
    public function it_displays_the_edit_channel_page()
    {
        $channel = Channel::factory()->create();
        $response = $this->get(route('piechart.edit', ['id' => $channel->id]));
        $response->assertStatus(200)
            ->assertInertia(fn (AssertableInertia $page) =>
                $page->component('EditChannel')
                    ->where('channel.id', $channel->id)
                    ->where('channel.name', $channel->name)
                    ->where('channel.amount', $channel->amount)
            );
    }

    /** @test */
    public function it_updates_a_channel_and_redirects_to_chart_page()
    {
        $channel = Channel::factory()->create();
        $data = ['name' => 'Updated Channel', 'amount' => 15];
        $response = $this->post(route('piechart.update', ['id' => $channel->id]), $data);
        $response->assertRedirect(route('piechart.show'));
        $this->assertDatabaseHas('channels', $data);
    }

    /** @test */
    public function it_deletes_a_channel_and_redirects_to_chart_page()
    {
        $channel = Channel::factory()->create();
        $response = $this->delete(route('piechart.destroy', ['id' => $channel->id]));
        $response->assertRedirect(route('piechart.show'));
        $this->assertDatabaseMissing('channels', ['id' => $channel->id]);
    }
}