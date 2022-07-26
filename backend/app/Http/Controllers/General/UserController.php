<?php

namespace App\Http\Controllers\General;

use Auth;
use Validator;
use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserController extends Controller{
    public function setFCM(Request $request){
            
        $tutor = User::find($request->id);

        $tutor = $tutor->update([
            'fname' => $request->fname,
            'lname' => $request->lname,
            'rate' => $request->rate,
            'about' => $request->about_me,
            'FCM_token' => $request->FCM_token,
        ]);
        

        return response()->json([
            'message' => 'Account info successfully updated',
        ], 200);
    }

    public function updateImage(Request $request){   
        $validator = Validator::make($request->all(), [
            'image' => 'required|string',
        ]);
        

        if($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $user = auth()->user();
        $image = $request->image;
        $image = explode( ',', $image);
        $image = base64_decode($image[1]);

        $user->update([
            'profile_image' => $request->image
        ]);

        return response()->json([
            'user' => $user,
        ], 200);
    }
}