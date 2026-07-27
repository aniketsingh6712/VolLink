import { useState } from "react";

import InvitationCard from "./components/InvitationCard";
import EmptyInvitationState from "./components/EmptyInvitationState";
import ConfirmDialog from "./components/ConfimDialog";

export default function InvitationGrid({
  tab,
  search,
  invitations,
  onAccept,
  onReject,
  onViewEvent,
}) {
  const [confirmOpen, setConfirmOpen] = useState(false);

  const [actionType, setActionType] = useState(null);

  const [selectedInvite, setSelectedInvite] = useState(null);

  const filtered = invitations.filter(
    (item) =>
      item.status.toLowerCase() === tab &&
      (item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.organization.toLowerCase().includes(search.toLowerCase())),
  );

  const openConfirm = (type, invite) => {
    setActionType(type);
    setSelectedInvite(invite);
    setConfirmOpen(true);
  };

  if (filtered.length === 0) {
    return <EmptyInvitationState />;
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((invite) => (
          <InvitationCard
            key={invite.id}
            invite={invite}
            onAccept={() => openConfirm("accept", invite)}
            onReject={() => openConfirm("reject", invite)}
            onViewEvent={onViewEvent}
          />
        ))}
      </div>

      {/* <ConfirmDialog
        isOpen={confirmOpen}
        onClose={() => {
          setConfirmOpen(false);
          setSelectedInvite(null);
        }}
        type={actionType === "reject" ? "danger" : "success"}
        title={
          actionType === "reject"
            ? "Reject Invitation"
            : "Accept Invitation"
        }
        message={
          actionType === "reject"
            ? "Are you sure you want to reject this invite?"
            : "Are you sure you want to accept this invite?"
        }
        confirmText={
          actionType === "reject"
            ? "Reject"
            : "Accept"
        }
        onConfirm={() => {
          if (actionType === "reject") {
            onReject(selectedInvite);
          } else {
            onAccept(selectedInvite);
          }
        }}
      /> */}
      <ConfirmDialog
        isOpen={confirmOpen}
        user={{
          name: selectedInvite?.organization,
        }}
        onClose={() => {
          setConfirmOpen(false);

          setSelectedInvite(null);
        }}
        type={actionType === "reject" ? "danger" : "success"}
        title={
          actionType === "reject" ? "Reject Invitation" : "Accept Invitation"
        }
        confirmText={actionType === "reject" ? "Reject" : "Accept"}
        onConfirm={(comment) => {
          if (actionType === "reject") {
            onReject(selectedInvite, comment);
          } else {
            onAccept(selectedInvite);
          }

          setConfirmOpen(false);

          setSelectedInvite(null);
        }}
      />
    </>
  );
}
