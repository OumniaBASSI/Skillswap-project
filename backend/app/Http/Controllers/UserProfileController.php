<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class UserProfileController extends Controller
{
    public function show()
    {
        return response()->json(Auth::user());
    }

    public function update(Request $request)
    {
        $user = Auth::user();
        $data = $request->validate([
            'name' => 'string|max:255',
            'bio' => 'nullable|string',
            'competencies' => 'nullable|string',
        ]);
        $user->update($data);
        return response()->json($user);
    }

    public function uploadImage(Request $request)
    {
        $request->validate([
            'image' => 'required|image|max:2048',
        ]);
        $user = Auth::user();
        if ($user->profile_image) {
            Storage::disk('public')->delete($user->profile_image);
        }
        $path = $request->file('image')->store('profile_images', 'public');
        $user->profile_image = $path;
        $user->save();
        return response()->json(['profile_image' => $path]);
    }
}