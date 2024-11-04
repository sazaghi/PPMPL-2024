from locust import HttpUser, task, between

class WebsiteUser(HttpUser):
    wait_time = between(1, 5)
    @task
    def get_all_users(self):
        self.client.get("/users")
    
    @task
    def get_user_by_id(self):
        user_id = 1  # Randomized example user ID
        self.client.get(f"/users/{user_id}")
    
    @task
    def create_user(self):
        payload = {
            "name": "Test User",
            "email": "testuser@example.com"
        }
        self.client.post("/users", json=payload)
    
    @task
    def update_user_by_id(self):
        user_id = 1  # Randomized example user ID
        payload = {
            "name": "Updated User",
            "email": "updateduser@example.com"
        }
        self.client.put(f"/users/{user_id}", json=payload)
    
    @task
    def delete_user_by_id(self):
        user_id = 1  # Randomized example user ID
        self.client.delete(f"/users/{user_id}")
