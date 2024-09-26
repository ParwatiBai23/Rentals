# Copyright (c) 2024, BWH and contributors
# For license information, please see license.txt
import frappe

def execute(filters=None):
    frappe.errprint(filters)
    # Define columns for the report
    columns = [{
        "fieldname": "make",
        "label": "Make",
        "fieldtype": "Data"
    }, {
        "fieldname": "total_revenue",
        "label": "Total Revenue",
        "fieldtype": "Currency",
        "options": "AED",
    }]

    # Fetch aggregated data using frappe.db.sql for SUM and joins
    data = frappe.db.sql("""
        SELECT
            vehicle.make AS make,
            SUM(ride_booking.total_amount) AS total_revenue
        FROM
            `tabRide Booking` ride_booking
        JOIN
            `tabVehicle` vehicle ON vehicle.name = ride_booking.vehicle
        WHERE
            ride_booking.docstatus = 1
        GROUP BY
            vehicle.make
    """, as_dict=True)

    # Prepare chart data for the report
    chart = {
        "data": {
            "labels": [x['make'] for x in data],  # Use dictionary keys
            "datasets": [{
                "values": [x['total_revenue'] for x in data],
            }]
        },
        "type": "pie",  # Pie chart type
    }

    # Return columns, data, a message, and the chart
    return columns, data, "Here is the report", chart
