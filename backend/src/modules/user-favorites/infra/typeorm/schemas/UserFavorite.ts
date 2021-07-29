import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ObjectIdColumn,
} from 'typeorm';

@Entity('user-favorites')
class UserFavorite {
  @ObjectIdColumn()
  id: string;

  @Column('uuid')
  user_id: string;

  @Column('uuid')
  recipe_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default UserFavorite;
