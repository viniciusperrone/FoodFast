import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateRecipes1604954187277 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'recipes',
        columns: [
          {
            name: 'id',
            type: 'varchar(36)',
            isPrimary: true,
            isUnique: true,
          },
          {
            name: 'category_id',
            type: 'varchar(36)',
            isNullable: true,
          },
          {
            name: 'name',
            type: 'varchar(255)',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'steps',
            type: 'varchar',
          },
          {
            name: 'ingredients',
            type: 'varchar',
          },
          {
            name: 'video_url',
            type: 'varchar(255)',
          },
          {
            name: 'image',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'current_timestamp',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'current_timestamp',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'recipes',
      new TableForeignKey({
        name: 'RecipeCategory',
        columnNames: ['category_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'categories',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropForeignKey('recipes', 'RecipeCategory');

    await queryRunner.dropTable('recipes');
  }
}
