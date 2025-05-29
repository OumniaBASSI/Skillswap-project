<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class DashboardController extends Controller
{
    public function index()
    {
        $user = auth()->user();

        $skillsOffered = $user->offres()->count();
        $skillsRequested = $user->propositions()->count();
        $activeExchanges = 0; // Replace with actual logic to count active exchanges
        $recentActivity = [
            'New skill match found: Emma is looking for JavaScript tutoring', // Replace with actual recent activity
            'Message from amine: "Hi there! I’m interested in your photography skills..."',
            'Exchange completed: You completed Python tutoring with Sarah',
        ];

        return response()->json([
            'skills_offered' => $skillsOffered,
            'skills_requested' => $skillsRequested,
            'active_exchanges' => $activeExchanges,
            'recent_activity' => $recentActivity,
        ]);
    }
}
