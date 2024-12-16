<?php

namespace App\Http\Controllers;

use App\Models\Channel;
use Illuminate\Http\Request;
use App\Http\Requests\ChannelRequest;
use Inertia\Inertia;
use Inertia\Response;

class ChannelController extends Controller
{
    public function show() {
        $channels = Channel::select('id', 'name', 'amount')->get();
        return Inertia::render('ShowChart', [
            'data' => response()->json($channels)->original
        ]);
    }

    public function create() {
        return Inertia::render('CreateChannel');
    }

    public function store(ChannelRequest $request) {
        $channel = new Channel();
        $channel->fill($request->validated());
        $channel->save();
        return redirect(route('piechart.show'));
    }

    public function edit(Request $request) {
        $channel = Channel::find($request->id);
        return Inertia::render('EditChannel', [
            'channel' => $channel
        ]);
    }

    public function update(Request $request) {
        $channel = Channel::find($request->id);
        $channel->name = $request->name;
        $channel->amount = $request->amount;
        $channel->updated_at = $request->updated_at;
        $channel->save();
        return redirect()->route('piechart.show');
    }

    public function destroy(Request $request) {
        $channel = Channel::find($request->id);
        $channel->delete();
        return redirect()->route('piechart.show');
    }
}
