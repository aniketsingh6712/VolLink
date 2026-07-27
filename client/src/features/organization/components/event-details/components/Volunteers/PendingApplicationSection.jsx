import React from 'react'
import EmptyState from '../Shared/EmptyState'
import { Section } from '../Shared/Section'
function PendingApplicationSection({pending}) {
    return (
        <>
            <div className="px-6 py-4">

                <Section
                    title={`Pending Applications (${pending.length})`}
                >

                    {pending.length > 0 ? (

                        pending.map((item, i) => (
                            <UserRow
                                key={i}
                                user={item}
                                type="pending"
                            />
                        ))

                    ) : (

                        <EmptyState
                            title="No Pending Applications"
                            subtitle="No volunteers have applied yet."
                        />

                    )}

                </Section>

            </div></>
    )
}

export default PendingApplicationSection