export type TeamMember = {
  id: string;
  name: string;
  role: string;
  photo: string | null;
  isPlaceholder: boolean;
};

/**
 * No team members are invented. Kept empty/placeholder until real team
 * data is supplied by the client.
 */
export const team: TeamMember[] = [
  { id: "team-1", name: "[NAME]", role: "[POSITION]", photo: null, isPlaceholder: true },
  { id: "team-2", name: "[NAME]", role: "[POSITION]", photo: null, isPlaceholder: true },
  { id: "team-3", name: "[NAME]", role: "[POSITION]", photo: null, isPlaceholder: true },
];
