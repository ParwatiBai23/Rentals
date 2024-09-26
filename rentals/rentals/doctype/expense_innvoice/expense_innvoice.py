# Copyright (c) 2024, BWH and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class ExpenseInnvoice(Document):
	pass
# import frappe
# from frappe.model.document import Document

# class ExpenseInnvoice(Document):
#     def validate(self):
#         total_amount = 0

#         for item in self.innvoice:
#             total_amount += item.quantity * item.price
        
#         self.total_amount = total_amount
        
#         if self.total_amount > 1000:
#             discount_percentage = 20
#         else:
#             discount_percentage = 10
        
#         discount_amount = (self.total_amount * discount_percentage) / 100
#         self.payable_amount = self.total_amount - discount_amount
#         self.discount = discount_amount
