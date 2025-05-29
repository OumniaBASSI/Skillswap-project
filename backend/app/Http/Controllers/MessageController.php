<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Message;
use App\Models\User;

class MessageController extends Controller
{
    public function index()
    {
        $user = auth()->user();

        // Replace with actual logic to fetch conversations and messages
        $conversations = [
            [
                'id' => 1,
                'user_id' => 2,
                'user_name' => 'User x',
                'last_message' => 'I\'m interested in your JavaScript...',
            ],
            [
                'id' => 2,
                'user_id' => 3,
                'user_name' => 'User y',
                'last_message' => 'Hey there! I saw you\'re looking for...',
            ],
            [
                'id' => 3,
                'user_id' => 4,
                'user_name' => 'User z',
                'last_message' => 'I can teach you graphic design...',
            ],
        ];
        $messages = [
            [
                'id' => 1,
                'conversation_id' => 1,
                'sender_id' => 2,
                'message' => 'Hey there! I saw you\'re looking for graphic design help...',
                'created_at' => now(),
            ],
            [
                'id' => 2,
                'conversation_id' => 1,
                'sender_id' => 1,
                'message' => 'Hi! Yes, I need help with creating a logo...',
                'created_at' => now(),
            ],
            [
                'id' => 3,
                'conversation_id' => 1,
                'sender_id' => 2,
                'message' => 'I usually start with a brief questionnaire...',
                'created_at' => now(),
            ],
            [
                'id' => 4,
                'conversation_id' => 1,
                'sender_id' => 1,
                'message' => 'That sounds great. I\'m looking for something modern...',
                'created_at' => now(),
            ],
            [
                'id' => 5,
                'conversation_id' => 1,
                'sender_id' => 2,
                'message' => 'Thanks for the design tips! They were really helpful',
                'created_at' => now(),
            ],
        ];

        return response()->json([
            'conversations' => $conversations,
            'messages' => $messages,
        ]);
    }
}
