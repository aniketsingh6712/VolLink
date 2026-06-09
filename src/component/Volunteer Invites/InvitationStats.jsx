function StatCard({ title, count, desc, color }) {
  return (
    <div
      className={`
bg-white rounded-2xl shadow-sm p-6
border-l-4 ${color}
`}
    >
      <p className="text-gray-600">{title}</p>

      <h2 className="text-4xl font-bold mt-2">{count}</h2>

      <p className="text-sm text-gray-500 mt-1">{desc}</p>
    </div>
  );
}

export default function InvitationStats({ invitations }) {
  const pending = invitations.filter((i) => i.status === "Pending").length;

  const accepted = invitations.filter((i) => i.status === "Accepted").length;

  const rejected = invitations.filter((i) => i.status === "Rejected").length;

  return (
    <div className="grid md:grid-cols-3 gap-5 mb-8">
      <StatCard
        title="Pending"
        count={pending}
        desc="Awaiting response"
        color="border-blue-500"
      />

      <StatCard
        title="Accepted"
        count={accepted}
        desc="Confirmed invites"
        color="border-green-500"
      />

      <StatCard
        title="Rejected"
        count={rejected}
        desc="Declined invites"
        color="border-red-500"
      />
    </div>
  );
}
