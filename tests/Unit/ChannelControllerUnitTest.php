<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Http\Controllers\ChannelController;
use App\Models\Channel;
use App\Http\Requests\ChannelRequest;
use Illuminate\Http\Request;
use Inertia\Testing\Assert;
use Inertia\Response;
use Mockery;
use ReflectionClass;
use Mockery\MockInterface;

class ChannelControllerUnitTest extends TestCase
{
    use RefreshDatabase;

    public function getProtected($obj, $prop) {
        $reflection = new ReflectionClass($obj);
        $property = $reflection->getProperty($prop);
        $property->setAccessible(true);
        return $property->getValue($obj);
    }

    public function test_create_returns_create_channel_page()
    {
        $controller = new ChannelController();
        $response = $controller->create();

        $this->assertInstanceOf(Response::class, $response);
        $this->assertEquals('CreateChannel', $this->getProtected($response, 'component'));
    }

    public function test_edit_returns_edit_channel_page()
    {
        $mockChannel = new Channel(['id' => 1, 'name' => 'Edit Channel', 'amount' => 10]);

        $channelMock = $this->mock(Channel::class, function (MockInterface $mock) use ($mockChannel) {
            $mock->shouldReceive('find')->with(1)->andReturn($mockChannel);
        });
        $request = new Request(['id' => 1]);
        $controller = new ChannelController();
        $response = $controller->edit($request);

        $this->assertInstanceOf(Response::class, $response);
        $this->assertEquals('EditChannel', $this->getProtected($response, 'component'));
    }

    public function test_store_creates_channel_and_redirects()
    {
        $mockRequestData = ['name' => 'New Channel', 'amount' => 100];

        $this->mock(ChannelRequest::class, function (MockInterface $mock) use ($mockRequestData) {
            $mock->shouldReceive('validated')->once()->andReturn($mockRequestData);
        });

        $this->mock(Channel::class, function (MockInterface $mock) use ($mockRequestData) {
            $mock->shouldReceive('fill')->with($mockRequestData)->andReturnSelf();
        });

        $controller = new ChannelController();
        $response = $controller->store(app(ChannelRequest::class));

        $this->assertEquals(302, $response->getStatusCode());
        $this->assertEquals(route('piechart.show'), $response->getTargetUrl());
    }
}
