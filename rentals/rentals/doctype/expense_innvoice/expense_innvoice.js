// Copyright (c) 2024, BWH and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Expense Innvoice", {
// 	refresh(frm) {

// 	},
// });

frappe.ui.form.on('Expense Innvoice', {
    refresh: function(frm) {
        frm.trigger('calculate_totals');
    },

    innvoice_add: function(frm) {
        frm.trigger('calculate_totals');
    },

    innvoice_remove: function(frm) {
        frm.trigger('calculate_totals');
    },

    calculate_totals: function(frm) {
        let total_amount = 0;

        frm.doc.innvoice.forEach(item => {
            total_amount += item.quantity * item.price;
        });

        let discount_percentage = total_amount > 1000 ? 20 : 10;
        let discount_amount = (total_amount * discount_percentage) / 100;
        let payable_amount = total_amount - discount_amount;

        // Set values on the form
        frm.set_value('total_amount', total_amount);
        frm.set_value('payable_amount', payable_amount);
        frm.set_value('discount', discount_amount);
    }
});

