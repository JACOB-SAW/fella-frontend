// components/profile/ProfileFeed.jsx
import GridMode from './feedModes/GridMode';
import HybridMode from './feedModes/HybridMode';

export default function ProfileFeed({ mode }) {
  if (mode === 'grid') return <GridMode />;
  if (mode === 'hybrid') return <HybridMode />;
  return null;
}