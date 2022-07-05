import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddRecipeIdToFavorites1656975248203 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'user_favorites',
      new TableColumn({
        name: 'recipe_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'user_favorites',
      new TableForeignKey({
        name: 'RecipeFavoritiesUser',
        columnNames: ['recipe_id'],
        referencedTableName: 'recipes',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('user_favorites', 'RecipeFavoritiesUser');

    await queryRunner.dropColumn('user_favorites', 'recipe_id');
  }
}
