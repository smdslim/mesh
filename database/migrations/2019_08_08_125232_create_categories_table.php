<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->increments('id');

            $table->string('name');

            // We declare here the nested set structure columns/fields
            $table->nestedSet();

            // The previous `nestedSet` blueprint helper is equivalent to
            // the following column/field declarations:
            //
            // $table->integer('parent_id')->unsigned()->nullable()->index();
            // $table->foreign('parent_id')->references('id')->on($table->getTable());
            // $table->integer('left')->unsigned()->nullable()->index();
            // $table->integer('right')->unsgined()->nullable()->index();
            // $table->integer('depth')->unsigned()->nullable()->index();
            //
            // Feel free to modify at your own will but note that all columns
            // *must be present* and initialized on the model accordingly.

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('categories');
    }
}
