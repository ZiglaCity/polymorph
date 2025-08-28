interface Appearance {
  size: number;
  color: string[];
}

interface Bird {
  id: string;
  common_name: string;
  scientific_name: string;
  description?: string;
  habitat: string[];
  appearance: Appearance;
  photos: string[];
  created_at?: string;
  updated_at?: string;
}

export interface UpdateBirdModel {
  common_name?: string;
  scientific_name?: string;
  description?: string;
  habitat?: string[];
  appearance?: Appearance;
  photo?: string[];
}

export default Bird;
