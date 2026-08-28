export type Client = {
  name: string;
  logo: string | null;
  url?: string;
};

/**
 * No client logos are fabricated. This stays empty until real, permissioned
 * logos are supplied — the TrustClients section renders a designed
 * placeholder state instead of inventing names.
 */
export const clients: Client[] = [];
