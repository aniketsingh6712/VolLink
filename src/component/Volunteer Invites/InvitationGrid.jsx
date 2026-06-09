import InvitationCard from "./InvitationCard";
import EmptyInvitationState from "./EmptyInvitationState";

export default function InvitationGrid({ tab, search, invitations }) {
  const filtered = invitations.filter(
    (item) =>
      item.status.toLowerCase() === tab &&
      (item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.organization.toLowerCase().includes(search.toLowerCase())),
  );

  if (filtered.length === 0) {
    return <EmptyInvitationState />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {filtered.map((invite) => (
        <InvitationCard key={invite.id} invite={invite} />
      ))}
    </div>
  );
}
