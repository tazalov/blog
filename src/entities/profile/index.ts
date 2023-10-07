export type { ProfileT, ProfileSchema } from './model/types/profileSchema';
export { profileReducer, profileSlice } from './model/slice/profile.slice';
export { fetchProfileData } from '@/entities/profile/model/services/fetchProfileData/fetchProfileData';
export { ProfileCard } from './ui/ProfileCard/ProfileCard';
