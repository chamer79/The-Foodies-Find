class AddCategoryRefernceToRecipes < ActiveRecord::Migration[6.1]
  def change
    add_reference(:recipes, :category, foreign_key: true)
  end
end
