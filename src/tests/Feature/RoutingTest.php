<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;

class RoutingTest extends TestCase
{
    use DatabaseTransactions;

    public function setUp(): void
    {
        parent::setUp();
        $this->user = User::factory()->create();
    }

    /**
     * 未認証ユーザーはtopページを閲覧できることをテスト
     */
    public function test_unAuthUser_can_see_top_page(): void
    {
        $response = $this->get('/');
        $response->assertOk();
        $response->assertViewIs('top.index');
    }

    /**
     * ログイン済ユーザーはtopページではなく/app/homeにリダイレクトされることをテスト
     */
    public function test_authUser_can_be_redirected_to_home_page()
    {
        $response = $this->actingAs($this->user)->get('/');
        $response->assertStatus(302);
        $response->assertRedirect('/app/home');
    }

    /**
     * 未認証ユーザーは/app/homeにアクセスできないことをテスト
     */
    public function test_unAuthUser_cannot_access_home_page(): void
    {
        $response = $this->get('/app/home');
        $response->assertStatus(302);
        $response->assertRedirect(route('login'));
    }
}
